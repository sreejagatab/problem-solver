// useProblems.js
import { useState, useEffect } from 'react';
import { fetchProblems, createProblem, updateProblem, deleteProblem } from '../utils/problems';

const useProblems = () => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchUserProblems = async () => {
      const userProblems = await fetchProblems();
      setProblems(userProblems);
    };
    fetchUserProblems();
  }, []);

  const addProblem = async (problem) => {
    const newProblem = await createProblem(problem);
    setProblems([...problems, newProblem]);
  };

  const editProblem = async (problemId, updates) => {
    const updatedProblem = await updateProblem(problemId, updates);
    setProblems(problems.map((p) => (p.id === problemId ? updatedProblem : p)));
  };

  const removeProblem = async (problemId) => {
    await deleteProblem(problemId);
    setProblems(problems.filter((p) => p.id !== problemId));
  };

  return { problems, addProblem, editProblem, removeProblem };
};

export default useProblems;