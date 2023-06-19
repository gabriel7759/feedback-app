import {useState} from 'react';
import RatingSelect from './RatingSelect';
import Card from './shared/Card';
import Button from './shared/Button';

function FeedbackForm() {
  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  const handleTextChange = (e) => {
    setBtnDisabled(true);
    setMessage(null);
    if(text.trim().length <= 10) {      
      setMessage('Text must be at least 10 characters');
    } else {
      setBtnDisabled(false);      
    }

    setText(e.target.value);
  };

  return (
    <Card>
      <form action="">
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input type="text" onChange={handleTextChange} value={text} placeholder="Write a review" />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm;