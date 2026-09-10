require('dotenv').config();
const initOracle = require('./src/utils/initOracle');

initOracle();

const app = require('./src/app');
const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
