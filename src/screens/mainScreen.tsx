import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Box } from '@mui/material';

import { data } from '../utils/data';

import { EventTable } from '../components/EventTable';

const RootDiv = styled(Box)`
  max-width: 1000px;
  margin: 0 auto;
  height: 100vh;
`;

export interface EventProps {
  ID: number;
  Name: string;
  Description: string;
  Severity: string;
  Time: Date;
}

export const MainScreen = () => {
  const [events, setEvents] = useState<EventProps[]>([]);

  const deleteEvent = (eventId: number) => {
    setEvents((prevState) => {
      return prevState.filter((event) => event.ID !== eventId);
    });
  };

  useEffect(() => {
    try {
      const getData = () => {
        const dataRes = new Promise((res) => res(data));
        dataRes.then((res) => {
          setEvents(res as EventProps[]);
        });
      };

      getData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <RootDiv>
      <h1>Logz.io</h1>
      {events.length > 0 ? <EventTable data={events} deleteEvent={deleteEvent}/> : null}
    </RootDiv>
  );
};
