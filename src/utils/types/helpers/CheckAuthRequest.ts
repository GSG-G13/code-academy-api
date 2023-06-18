import { Decoded } from './Decoded';

interface RequestData extends Request {
  user?: Decoded;
}

export default RequestData;
