
import { useHistory } from 'react-router-dom';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetUpPage = () => {
    const history = useHistory();
  const AddmeetupHandler = (meetupData) => {
    fetch('https://react-practice-31e40-default-rtdb.firebaseio.com/meetups.json', {
      method: 'POST',
      body: JSON.stringify(meetupData),
      headers: {
        'Content-Type': 'application/json',
      }
    }
    ).then(() => {
        history.replace('/')
    });
  };

  return (
    <section>
      <h1>Add New Meet up</h1>
      <NewMeetupForm onAddMeetup={AddmeetupHandler} />
    </section>
  );
};

export default NewMeetUpPage;
