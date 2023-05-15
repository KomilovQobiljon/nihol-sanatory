import { LoadingOutlined } from '@ant-design/icons';
import { useQuery } from "react-query";

import useAxios from '../../../hooks/useAxios';
import { Room } from '../../../Generic/Style';
import dayjs from 'dayjs';

const OccupiedRoom = ({ cliente }) => {
  const axios = useAxios();
  
  const { isLoading, data } = useQuery(
    `accomodation/2/${cliente.clienteID}`,
    () => axios({ url: `/accomodation/2/user?_id=${cliente.userID}`})
      .then(data=>{
        return data.data.data;
      })
    );
  return (
    <Room color={"red"} key={cliente.clienteID}>
      {
        isLoading ? <LoadingOutlined/> :
        dayjs(new Date(+ data?.endDate)).diff(new Date(),"d")
      }
    </Room>
  )
};

export default OccupiedRoom;