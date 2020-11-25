import React, {
  SyntheticEvent,
  useMemo,
  useCallback,
} from 'react';

import { useLocation, useHistory } from 'react-router-dom';

import Epic from '@vkontakte/vkui/dist/components/Epic/Epic';
import Tabbar from '@vkontakte/vkui/dist/components/Tabbar/Tabbar';
import TabbarItem from '@vkontakte/vkui/dist/components/TabbarItem/TabbarItem';
import View from '@vkontakte/vkui/dist/components/View/View';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import PanelHeader from '@vkontakte/vkui/dist/components/PanelHeader/PanelHeader';

import {
  Icon28NewsfeedOutline,
  Icon28ServicesOutline,
  Icon28MessageOutline,
  Icon28ClipOutline,
  Icon28UserCircleOutline,
} from '@vkontakte/icons';

// import Home from './Home';
// import Photos from './Photos';
// import Photo from './Photo';

const Index: React.FC = () => {
  const location = useLocation();
  const history = useHistory();

  const pathname = useMemo(() => {
    return location.pathname;
  }, [location.pathname]);

  const onClick = useCallback(
    (evt: SyntheticEvent<HTMLElement>) => {
      const path = evt?.currentTarget?.dataset?.story;

      console.log('path', path);

      return path ? history.push(path) : undefined;
    },
    [history],
  );

  return (
    <Epic
      activeStory={pathname}
      tabbar={
        <Tabbar>
          <TabbarItem
            onClick={onClick}
            selected={pathname === '/'}
            data-story="/"
            text="Новости"
          >
            <Icon28NewsfeedOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname === 'services'}
            data-story="/services"
            text="Сервисы"
          >
            <Icon28ServicesOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname === 'messages'}
            data-story="/messages"
            label="12"
            text="Сообщения"
          >
            <Icon28MessageOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname === 'clips'}
            data-story="/clips"
            text="Клипы"
          >
            <Icon28ClipOutline />
          </TabbarItem>
          <TabbarItem
            onClick={onClick}
            selected={pathname === 'profile'}
            data-story="/profile"
            text="Профиль"
          >
            <Icon28UserCircleOutline />
          </TabbarItem>
        </Tabbar>
      }
    >
      <View id="/" activePanel="/">
        <Panel id="/">
          <PanelHeader>Новости</PanelHeader>
        </Panel>
      </View>

      <View id="/services" activePanel="/services">
        <Panel id="/services">
          <PanelHeader>Сервисы</PanelHeader>
        </Panel>
      </View>

      <View id="/messages" activePanel="/messages">
        <Panel id="/messages">
          <PanelHeader>Сообщения</PanelHeader>
        </Panel>
      </View>

      <View id="/clips" activePanel="/clips">
        <Panel id="/clips">
          <PanelHeader>Клипы</PanelHeader>
        </Panel>
      </View>

      <View id="/profile" activePanel="/profile">
        <Panel id="/profile">
          <PanelHeader>Профиль</PanelHeader>
        </Panel>
      </View>
    </Epic>
  );
};

export default Index;
