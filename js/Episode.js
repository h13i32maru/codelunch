class Episodes {
  /**
   * @returns {string}
   */
  renderEpisodes() {
    const results = window.episodes.map(episode => {
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

  /**
   * @param {number} number
   * @returns {string}
   */
  renderEpisode(number) {
    const episode = window.episodes.find(episode => episode.number === number);

    document.querySelector('head title').textContent = `${episode.number}. ${episode.title} | CodeLunch.fm`;

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

  /**
   * @private
   * @param {Array<{name: string, url: string, icon: string}>} speakers
   * @return {string}
   */
  renderSpeakers(speakers) {
    const results = speakers.map(speaker => {
      return `
        <a href="${speaker.url}">
          <img src="${speaker.icon}"/>
        </a>
      `;
    });

    return results.join('\n');
  }

  /**
   * @private
   * @param {Array<{text: string, url: string}>} notes
   * @return {string}
   */
  renderNotes(notes) {
    const results = notes.map(note => {
      return `
        <li class="note">
          <a href="${note.url}">${note.text}</a>
        </li>
      `;
    });

    return results.join('\n');
  }
}

