import React, { useEffect, useState } from 'react';
import styles from './Questions.module.sass';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@material-ui/core';
import { ExpandMore } from '@material-ui/icons';
const Questions = ({ questions }) => {
  const [activePost, setActivePost] = useState([]);
  const deleteActivePost = (index) => {
    const newPost = activePost.filter((post) => post !== index);
    setActivePost(newPost);
  };

  useEffect(() => {
    setActivePost([]);
  }, [questions]);

  return (
    <div className={styles.question_container}>
      <div>
        {questions.map((item, index) => {
          if (item.index <= 4) {
            return (
              <Accordion
                key={index}
                expanded={activePost.includes(item.index)}
                style={{
                  borderRadius: 75,
                  maxWidth: '660px',
                  width: '100%',
                  background: 'transparent',
                }}
                TransitionProps={{ timeout: 500 }}
              >
                <AccordionSummary
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  className={styles.question_div}
                  style={{
                    background: activePost.includes(item.index)
                      ? 'linear-gradient(88.32deg, #009BFF -15.05%, #5E0DFF 108.12%)'
                      : 'linear-gradient(95.71deg, rgba(227, 227, 248, 0.26) 23.99%',
                  }}
                  expandIcon={
                    <ExpandMore style={{ color: 'white', fontSize: 30 }} />
                  }
                  onClick={() => {
                    activePost.includes(item.index)
                      ? deleteActivePost(item.index)
                      : setActivePost((prev) => [item.index]);
                  }}
                >
                  <Typography>
                    <p className={styles.question_div_question}>
                      {item.question}
                    </p>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    border: null,
                    background: 'transparent',
                    color: 'white',
                  }}
                >
                  <Typography>
                    <p className={styles.question_p_answer}>{item.answer}</p>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            );
          }
        })}
      </div>
      <div className={styles.question_div_data}>
        {questions.map((item, index) => {
          if (item.index > 4) {
            return (
              <Accordion
              key={index}
                expanded={activePost.includes(item.index)}
                style={{
                  borderRadius: 75,
                  maxWidth: '660px',
                  width: '100%',
                  background: 'transparent',
                }}
              >
                <AccordionSummary
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                  className={styles.question_div}
                  style={{
                    background: activePost.includes(item.index)
                      ? 'linear-gradient(88.32deg, #009BFF -15.05%, #5E0DFF 108.12%)'
                      : 'linear-gradient(95.71deg, rgba(227, 227, 248, 0.26) 23.99%, rgba(237, 224, 252, 0.18) 80.43%)',
                  }}
                  expandIcon={
                    <ExpandMore style={{ color: 'white', fontSize: 30 }} />
                  }
                  onClick={() => {
                    activePost.includes(item.index)
                      ? deleteActivePost(item.index)
                      : setActivePost((prev) => [item.index]);
                  }}
                >
                  <Typography>
                    <span style={{ display: 'flex', alignItems: 'center' }}>
                      <p>{item.question}</p>
                    </span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  style={{
                    border: null,
                    background: 'transparent',
                    color: 'white',
                  }}
                >
                  <p className={styles.question_p_answer}>{item.answer}</p>
                </AccordionDetails>
              </Accordion>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Questions;
