import { createServer } from "./index";

// this allows you to configure the environment before stating the server
const init = async () => {
  await createServer();
};

init();
