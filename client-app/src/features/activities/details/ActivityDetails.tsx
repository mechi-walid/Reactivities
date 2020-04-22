import React from "react";
import { IActivity } from "../../../app/models/activity";
import { Card ,Image, ButtonGroup, Button} from "semantic-ui-react";


interface IProps {
activity:IActivity;
//editMode:boolean;
setEditMode:(editMode:boolean)=>void;
setSelectedActivity:(activity:IActivity|null)=>void;
}


const ActivityDetails:React.FC<IProps> = ({activity,setEditMode,setSelectedActivity}) => {
  return (
    <div>
      <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{activity.title}</Card.Header>
          <Card.Meta>
            <span>{activity.date} </span>
          </Card.Meta>
          <Card.Description>
          {activity.description} 
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
         <ButtonGroup widths={2}>
             <Button    onClick={() => setEditMode(true)} basic color='blue' content='Edit'/>
             <Button onClick={() => setSelectedActivity(null)} basic color='grey' content='Cancel'/>
         </ButtonGroup>
        </Card.Content>
      </Card>
    </div>
  );
};
export default ActivityDetails;
