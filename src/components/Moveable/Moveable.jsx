import { Typography, Layout } from "antd";

const { Title, Paragraph } = Typography;
const { Content } = Layout;
const Moveable = () => {
  return (
    <Content>
      <Title>Moveable Exploration</Title>
      <Paragraph>
        I'm pursuing a more "liveable" UI that allows users to interact with
        elements in a more physical way. The goal here is for users to be able
        to modify/create their own UIs, perhaps adaptively.
      </Paragraph>
      <Title level={2}>State Ttimeline Management</Title>
      <Paragraph>
        Another focus in this application will be to implement a state timeline
        management system that allows users to navigate a timeline of their
        actions. This will allow users to undo/redo actions, and also allow
        users to save their state timeline and share it with others.
      </Paragraph>
    </Content>
  );
};

export default Moveable;
