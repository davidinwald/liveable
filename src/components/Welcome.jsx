import { Typography, List, Layout } from "antd";
const { Title, Paragraph } = Typography;
const { Content } = Layout;

const libraries = [
  {
    name: "Vite",
    description:
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR) A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.",
    url: "https://vitejs.dev/",
  },
  {
    name: "React",
    description:
      "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    url: "https://reactjs.org/",
  },
  {
    name: "Ant Design",
    description:
      "An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI library for enterprises.",
    url: "https://ant.design/",
  },
  {
    name: "React Router",
    description:
      "React Router is a collection of navigational components that compose declaratively with your application. Whether you want to have bookmarkable URLs for your web app or a composable way to navigate in React Native, React Router works wherever React is rendering--so take your pick!",
    url: "https://reactrouter.com/",
  },
  {
    name: "Axios",
    description: "Promise based HTTP client for the browser and node.js",
    url: "https://axios-http.com/",
  },
];

const ide = [
  {
    name: "Visual Studio Code",
    description:
      "Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git.",
    url: "https://code.visualstudio.com/",
  },
  {
    name: "Copilot/Copilot Chat",
    description:
      "Copilot is a tool that helps you and your team write better code, together. It learns from your codebase and uses that context to give you suggestions, wherever you are in your code. Copilot Chat is a Slack app that allows you to chat with your Copilot directly in Slack.",
    url: "https://copilot.github.com/",
  },
  {
    name: "Prettier",
    description:
      "Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.",
    url: "https://prettier.io/",
  },
];

const Welcome = () => {
  // function to introduce main libraries used in the project
  return (
    <Content style={{ width: "600px" }}>
      <Title>Start App Overview</Title>
      <Title level={2}>Libraries</Title>
      <List
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={libraries}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.url}>{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
      <Title level={2}>IDE Tools</Title>
      <Paragraph>
        These are the IDE tools I used to build this application.
      </Paragraph>
      <List
        // header={<div>Header</div>}
        // footer={<div>Footer</div>}
        bordered
        dataSource={ide}
        renderItem={(item) => (
          <List.Item>
            <List.Item.Meta
              title={<a href={item.url}>{item.name}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
    </Content>
  );
};

export default Welcome;
