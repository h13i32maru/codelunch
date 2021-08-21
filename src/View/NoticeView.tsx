import React from 'react';

type Props = {
  notice?: string;
}

export const NoticeView: React.FC<Props> = (props) => {
  if (props.notice == null) return null;

  return (
    <div className="notice">
      <img src="/image/info.png"/>
      {props.notice}
    </div>
  );
};
