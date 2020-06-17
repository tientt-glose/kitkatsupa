import React from 'react';
import { Steps, Layout } from 'antd';
const { Step } = Steps;

const { Header, Footer, Sider, Content } = Layout;

const CouresInfo = () => {

    return(
        <div>
        <Layout>
          <Header>レッスン名 :	</Header>
          <Content>YouTubeフレーム</Content>
          <Content> - </Content>
          <Content> - </Content>
          <Content> - </Content>
          <Footer className="foot">宿題	</Footer>
          <Footer>宿題	</Footer>
        </Layout>
      </div>
    );

}

export default CouresInfo;