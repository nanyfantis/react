import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import {BeatLoader} from 'react-spinners'

function App() {
  const [formData, setFormData] = useState({ language: "Greek", message: "" });
  const [error, setError] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [translation, setTranslation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;



  useEffect(() => {
    console.log(formData); 
  }, [formData]); 

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const translate = async () => {
    const { language, message } = formData;

    const options = {
      method: "POST",
      url: "https://translate-plus.p.rapidapi.com/translate",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": apiKey,
        "X-RapidAPI-Host": "translate-plus.p.rapidapi.com",
      },
      data: {
        text: message,
        source: "en",
        target: language,
      },
    };

    try {
      setIsLoading(true); // Set loading state to true while fetching translation
      const response = await axios.request(options);
      const translatedText = response.data.translations.translation;
      setTranslation(translatedText);
      setIsLoading(false); // Set loading state back to false after translation is done
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Set loading state back to false if there's an error
    }
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (!formData.message) {
      setError("Please enter a message");
      return;
    }
    await translate(); // Wait for translation to complete before proceeding
  };

  const handleCopy = () => {
    navigator.clipboard
      .writeText(translation)
      .then(() => displayNotification())
      .catch((err) => console.error("failed to copy", err));
  };

  const displayNotification = () => {
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <div className='container'>
      <h1>Translation</h1>

      <form onSubmit={handleOnSubmit}>
        <div className='choices'>
          <input
            type='radio'
            id='el'
            name='language'
            value='el'
            defaultChecked={formData.language === "el"}
            onChange={handleInputChange}
          />
          <label htmlFor='el'>Greek</label>

          <input
            type='radio'
            id='fr'
            name='language'
            value='fr'
            defaultChecked={formData.language === "fr"}
            onChange={handleInputChange}
          />
          <label htmlFor='fr'>French</label>

          <input
            type='radio'
            id='de'
            name='language'
            value='de'
            defaultChecked={formData.language === "de"}
            onChange={handleInputChange}
          />
          <label htmlFor='de'>German</label>
        </div>

        <textarea
          name='message'
          placeholder='Type your message here..'
          onChange={handleInputChange}></textarea>

        {error && <div className='error'>{error}</div>}

        <button type='submit'>Translate</button>
      </form>

      <div className='translation'>
        <div className='copy-btn' onClick={handleCopy}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184'
            />
          </svg>
        </div>
        {isLoading ? <BeatLoader size={12} color="#36d7b7" /> : translation}
      </div>

      <div className={`notification ${showNotification ? "active" : ""}`}>
        Copied to clipboard!
      </div>
    </div>
  );
}

export default App;
