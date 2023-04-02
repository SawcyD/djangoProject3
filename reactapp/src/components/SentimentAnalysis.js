import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyComponent() {
  const [sentimentAnalysisData, setSentimentAnalysisData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/sentiment-analysis/')
      .then(response => {
        setSentimentAnalysisData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {sentimentAnalysisData.map(data => (
        <p key={data.id}>{data.text} - {data.sentiment}</p>
      ))}
    </div>
  );
}
