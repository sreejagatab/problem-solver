// SocialMedia/ContentScheduler.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContentScheduler from '../../../src/components/SocialMedia/ContentScheduler';

test('renders scheduled posts', () => {
  const mockPosts = [
    { id: 1, title: 'Post 1', scheduledAt: '2023-06-01T10:00:00Z' },
    { id: 2, title: 'Post 2', scheduledAt: '2023-06-15T14:30:00Z' },
  ];

  render(<ContentScheduler posts={mockPosts} />);

  expect(screen.getByText('Post 1')).toBeInTheDocument();
  expect(screen.getByText('Post 2')).toBeInTheDocument();
});

test('calls schedulePost handler when schedule new post button is clicked', () => {
  const mockSchedulePost = jest.fn();
  render(<ContentScheduler schedulePost={mockSchedulePost} />);
  screen.getByText('Schedule New Post').click();
  expect(mockSchedulePost).toHaveBeenCalledTimes(1);
});