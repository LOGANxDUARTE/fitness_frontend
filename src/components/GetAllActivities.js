// import React, { useEffect } from "react";
// import { getActivities } from "../api";
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button
//   } from 'reactstrap';


// const Activities = (props) => {
//     const { setActivities } = props;

//     useEffect(() => {
//         Promise.all([getActivities()])
//         .then(([activities]) => {
//             setActivities(activities)
//         })
//         .catch(console.error)
//     }, [setActivities]);

//     return (
//         <div id='activities'>
//         <Card>
//           <CardImg top width="100%" src="/assets/318x180.svg" alt="Card image cap" />
//           <CardBody>
//             <CardTitle tag="h5">Activity</CardTitle>
//             <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
//             <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
//             <Button>Button</Button>
//           </CardBody>
//         </Card>
//         </div>
//     );
// };

// const Activities = (props) => {
//     const { activities, setActivities } = props;
  
//     useEffect(() => {
//       Promise.all([getActivities()])
//         .then(([activities]) => {
//           setActivities(activities);
//         })
//         .catch(console.error);
//     }, []);
  
//     return (
//       <div id="activities">
//         <ul>
//           {activities.map((activity, index) => {
//             return (
//               <li key={index}>
//                 Activity {index + 1}
//                 <ul>
//                   <li>{activity.name}</li>
//                   <li>{activity.description}</li>
//                 </ul>
//               </li>
//             );
//           })}
//         </ul>
//       </div>
//     );
//   };

// export default Activities;

import React, { useEffect } from "react";

import { getActivities } from "../api";

const GetAllActivities = (props) => {
  const { activities, setActivities } = props;

  useEffect(() => {
    getActivities()
      .then((activities) => {
        setActivities(activities);
      })
      .catch(console.error);
  });

  return (
    <ul>
      {activities.map((activity, index) => {
        return (
          <li key={index}>
            Activity {index + 1}
            <ul>
              <li>{activity.name}</li>
              <li>{activity.description}</li>
            </ul>
          </li>
        );
      })}
    </ul>
  );
};

export default GetAllActivities;