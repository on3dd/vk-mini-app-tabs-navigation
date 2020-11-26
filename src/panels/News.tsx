import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';

import PanelWrapper from '../utils/wrappers/PanelWrapper';

import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

type NewsProps = {
  id: string;
};

const News: React.FC<NewsProps> = ({ id }: NewsProps) => {
  const [fetching, setFetching] = useState(false);

  return (
    <>
      <Route
        path="/news"
        component={() => (
          <PanelWrapper id={id} fetching={fetching}>
            <Panel id={id}>
              <PanelHeader>News</PanelHeader>
              {/* <NewsComponent data={user} /> */}
            </Panel>
          </PanelWrapper>
        )}
      />
    </>
  );
};

export default News;
