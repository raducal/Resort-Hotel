import React from "react";
import RoomFilter from "./RoomFilter.js";
import RoomList from "./RoomList.js";
// import { RoomConsumer } from "../Context";
import { withRoomConsumer } from "../Context";
import Loading from "../components/Loading";

function RoomContainer({ context }) {
  const { loading, sorted, rooms } = context;
  console.log(context);
  return (
    <div>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sorted} />
    </div>
  );
}

export default withRoomConsumer(RoomContainer);
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {value => {
//         const { loading, sortedRooms, rooms } = value;
//         return (
//           <div>
//             Hello from roomscontainer
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }
