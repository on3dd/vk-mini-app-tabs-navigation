import React, { useState } from 'react';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type ServicesProps = {
  id: string;
};

const Services: React.FC<ServicesProps> = ({ id }: ServicesProps) => {
  const [fetching, setFetching] = useState(false);

  return (
    <PanelWrapper id={id} fetching={fetching}>
      <Panel id={id}>
        <PanelHeader>Services</PanelHeader>
        {/* <ServicesComponent data={user} /> */}
      </Panel>
    </PanelWrapper>
  );
};

export default Services;
