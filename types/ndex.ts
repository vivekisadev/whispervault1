import { LargeNumberLike } from "crypto";

export interface Confession {
    id: string;
    content: string;
    timestamp: number;
    upvotes: number;
    downvotes: number;
    replies: Reply[];
    tags?: string[];
    isReported?: boolean;
    reportCount?: number;
    ip?: string;
}

export interface Reply{
    id: string;
    confessionId: string;
    content: string;
    timestamp: number;
    upvotes:number;
    downvotes: number;
}

export interface ChatMessage{
    id: string;
    content: string;
    timestamp: number;
    userId: string;
    roomId: string;
    isReported?: boolean;
}

export interface ChatRoom{
    id: string;
    users: string[];
    message: ChatMessage[];
    createdAt: number;
}

export interface User {
    id: string;
    anonymousName: string;
    joinedAt: number;
    currentRoom?: string;
}

export interface Report{
    id: string;
    targetId: string;
    targetType: 'confession' | 'message';
    reason: string;
    timestamp: number;
    reporterId: string;
}

export interface VoteAction {
    targetId: string;
    targetType: 'confession' | 'message';
    voteType: 'upvote' | 'downvote';
    userId: string;
}