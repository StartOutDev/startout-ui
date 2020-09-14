import React from 'react';

import * as Icons from './index';

export default {
  title: 'Theming/Icons',
  component: React.Fragment,
};

export const Page = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div>
      <Icons.Check />
    </div>
    <div>
      <Icons.Cross />
    </div>
  </div>
);
