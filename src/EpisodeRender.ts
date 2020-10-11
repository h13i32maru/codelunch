import {EpisodeEntity} from './episodes';

export class EpisodeRender {
  renderEpisodes(episodes: EpisodeEntity[]): string {
    const results = episodes.map(episode => {
      // language=HTML
      return `
        <article class="episode">
          <a class="body" href="./${episode.number}">
            <div class="date">${episode.created.split('T')[0]}</div>
            <div class="title">${episode.number}. ${episode.title}</div>
            <div class="desc">${episode.desc}</div>
          </a>
          <div class="speakers">${this.renderSpeakers(episode.speakers)}</div>
        </article>
    `;
    });

    return results.join('\n');
  }

  renderEpisode(episode: EpisodeEntity): string {
    // language=HTML
    return `
      <article class="episode">
        <div class="body">
          <div class="date">${episode.created.split('T')[0]}</div>
          <div class="title">${episode.number}. ${episode.title}</div>
          <div class="desc">${episode.desc}</div>
        </div>
        <iframe src="${episode.url}" height="102px" width="100%" frameborder="0" scrolling="no"></iframe>
        <div class="speakers">${this.renderSpeakers(episode.speakers)}</div>
        <div class="notes">
          <div class="notes-label">Show Notes</div>
          <ul>
            ${this.renderNotes(episode.notes)}
          </ul>
        </div>
      </article>
    `;
  }

  private renderSpeakers(speakers: EpisodeEntity['speakers']): string {
    const results = speakers.map(speaker => {
      // language=HTML
      return `
        <a href="${speaker.url}">
          <img src="${speaker.icon}"/>
        </a>
      `;
    });

    return results.join('\n');
  }

  private renderNotes(notes: EpisodeEntity['notes']): string {
    const results = notes.map(note => {
      // language=HTML
      return `
        <li class="note">
          <a href="${note.url}">${note.text}</a>
        </li>
      `;
    });

    return results.join('\n');
  }
}

