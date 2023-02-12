// import React, { Component } from 'react';
import { useState } from 'react';
import Feedback from './Feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section'
import Notification from './Notification/Notification';

export function App(){
const [options, setOptions] = useState({good: 0, neutral: 0, bad: 0})
  
  
 const leaveFeedback = option => {
   setOptions(prevState => ({
     ...prevState,
     [option]: options[option] += 1,
            
   }));
}
  
  const countTotalFeedback = () => {
    const { good, neutral, bad } = options;
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    if (!countTotalFeedback()) {
      return 0;
    }
    return Math.round((options.good / countTotalFeedback()) * 100);
  };
    
    return (
      <div>
  <Section title="Please leave your Feedback">
  <Feedback
          options={Object.keys(options)}
          onleaveFeedback ={leaveFeedback}
  /> 
  </Section>

        {countTotalFeedback()
          ?
          (<Section title="Statistics">  
  <Statistics
          good={options.good}
          neutral={options.neutral}
          bad={options.bad}
          total={countTotalFeedback()}
          positivePercentage ={countPositiveFeedbackPercentage()}
  />
  </Section>
        ) : (
          <Notification message="There is no feedback"/>
          )}
</div>
    )
  }