import React from 'react';
import style from './BlogPreview.module.css';
import Image from 'next/image';
import { Blog } from '@/app/blogData';

type CommentProps = {
  username: string;
  date: Date;
  content: string;
};

export default function Comment({
  username,
  date,
  content,  
}: CommentProps) {
  return (
    <div>
      <h4>{username}</h4>
      <p>{content}</p>
      <span>{new Date(date).toDateString()}</span>
    </div>
  );
}
