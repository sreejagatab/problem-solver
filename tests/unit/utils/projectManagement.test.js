// projectManagement.test.js
import { fetchProjects, updateProject } from '../../src/utils/projectManagement';
import axios from 'axios';

jest.mock('axios');

test('fetchProjects makes a GET request to the projects endpoint', async () => {
  const mockProjects = [
    { id: 1, name: 'Project A', status: 'In Progress' },
    { id: 2, name: 'Project B', status: 'Pending' },
  ];
  axios.get.mockResolvedValueOnce({ data: mockProjects });

  const projects = await fetchProjects();
  expect(projects).toEqual(mockProjects);
  expect(axios.get).toHaveBeenCalledWith('/api/projects');
});

test('updateProject makes a PUT request to the project update endpoint', async () => {
  const mockProjectId = 'project-123';
  const mockUpdates = { status: 'Completed' };
  const mockUpdatedProject = { id: mockProjectId, name: 'Updated Project', status: 'Completed' };
  axios.put.mockResolvedValueOnce({ data: mockUpdatedProject });

  const project = await updateProject(mockProjectId, mockUpdates);
  expect(project).toEqual(mockUpdatedProject);
  expect(axios.put).toHaveBeenCalledWith(`/api/projects/${mockProjectId}`, mockUpdates);
});
