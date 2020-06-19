import React, { useState, useEffect, useCallback } from 'react';
import api from '../../services/api';

export default function Home() {
  const [courses, setCourses] = useState([]);

  const getCourses = useCallback(async () => {
    const res = await api.get('/courses');

    setCourses(res.data);
  }, []);

  useEffect(() => {
    getCourses();
  }, []);

  return (
    <>{courses && courses.map((course) => <p key={course}>{course}</p>)}</>
  );
}
