import React, { Component } from "react";
import { Segment, Item, Icon, Button, List } from "semantic-ui-react";
import EventListAttendee from './EventListAttendee'
import { Link } from 'react-router-dom'
class EventListItem extends Component {
  render() {
    const {event,onDeleteEvent} = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" circular src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header as="a">{event.title}</Item.Header>
                <Item.Description>
                  Hosted by <a>{event.hostedBy}</a>
                </Item.Description>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" /> {event.date} |
            <Icon name="marker" /> {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees && event.attendees.map((attendee) => (
            <EventListAttendee key={attendee.id} attendee={attendee}/>

            ))}
          </List>
        </Segment>
        <Segment clearing>
          <span>{event.description}</span>
          <Button.Group>
          <Button onClick={onDeleteEvent(event.id)} as="a" color="red" floated="right" content="Remove" />
          <Button.Or/>
          <Button  as={Link} to={`/event/${event.id}`} color="teal" floated="right" content="View" />
          </Button.Group>
        </Segment>
      </Segment.Group>
    );
  }
}
export default EventListItem;
