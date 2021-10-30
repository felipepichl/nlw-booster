import { serverHttp } from './server';

serverHttp.listen(3333, () => {
  console.log('Server running in port 3333');
});
