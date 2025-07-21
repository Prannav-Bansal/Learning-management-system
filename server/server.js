

import { listen } from './app';





const port = process.env.PORT || 5000;
listen(port, () => {
  console.log(`Server is running on port ${PORT}`);
});