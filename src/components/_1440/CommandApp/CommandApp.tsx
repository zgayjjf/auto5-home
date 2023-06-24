import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import classes from './CommandApp.module.css';
import { FrameIcon2 } from './FrameIcon2.js';
import { FrameIcon } from './FrameIcon.js';

interface Props {
  className?: string;
  classes?: {
    iMAGE?: string;
    iMAGE2?: string;
    root?: string;
  };
  text?: {
    xcode?: ReactNode;
    searchAndOpenYourRecentXcodePr?: ReactNode;
    _243k?: ReactNode;
    _12?: ReactNode;
  };
}
/* @figmaId 4:366 */
export const CommandApp: FC<Props> = memo(function CommandApp(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}>
      <div className={`${props.classes?.iMAGE || ''} ${classes.iMAGE}`}></div>
      <div className={classes.content}>
        {props.text?.xcode != null ? props.text?.xcode : <div className={classes.xcode}>Xcode</div>}
        {props.text?.searchAndOpenYourRecentXcodePr != null ? (
          props.text?.searchAndOpenYourRecentXcodePr
        ) : (
          <div className={classes.searchAndOpenYourRecentXcodePr}>
            Search and open your recent Xcode Projects, manage your Simulators &amp; Apps, view the latest Releases,
            search the Apple Developer Documentation and quickly clear Xcode cache files.
          </div>
        )}
      </div>
      <div className={classes.statGroup}>
        <div className={classes.frame8}>
          <div className={classes.frame}>
            <FrameIcon className={classes.icon} />
          </div>
          {props.text?._243k != null ? props.text?._243k : <div className={classes._243k}>2.43k</div>}
        </div>
        <div className={classes.frame9}>
          <div className={classes.frame2}>
            <FrameIcon2 className={classes.icon2} />
          </div>
          {props.text?._12 != null ? props.text?._12 : <div className={classes._12}>12</div>}
        </div>
        <div className={`${props.classes?.iMAGE2 || ''} ${classes.iMAGE2}`}></div>
      </div>
    </div>
  );
});
