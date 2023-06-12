import React, { useEffect } from "react";
import { PostComment } from "../../components/PostComment";
import { Layout } from 'antd';
import { useSelector, useDispatch } from "react-redux";
import { selectPostDetails, fetchPostDetails, selectPostDetailsLoading } from "./postDetailsSlice";
import { PostDetailsSkeleton } from "./PostDetailsSkeleton";
import ReactMarkdown from 'react-markdown';
import { useParams } from "react-router-dom";

const {Content, Sider } = Layout;


export function PostDetails() {
    const postDetails = useSelector(selectPostDetails);
    const postDetailsLoading = useSelector(selectPostDetailsLoading);
    const dispatch = useDispatch();
    const { subreddit, postId } = useParams();

    useEffect(() => {
        dispatch(fetchPostDetails(`r/${subreddit}/${postId}`));
    }, [])

    return (
        <Layout>
            { (postDetails && !postDetailsLoading) ? 
            (<Content style={{marginLeft: 300, marginTop: 20}}>
                <div style={{maxWidth: '70%'}}>
                <div style={{display: 'flex', flexDirection: "column", justifyContent: 'center'}}>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <img style={{width: '30px', height: 'auto', borderRadius: '50%'}} src="https://logodownload.org/wp-content/uploads/2018/02/reddit-logo-16.png" />
                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginLeft: '0.5rem'}}>
                            <p style={{fontFamily: 'Arial', margin: 0, padding: 0}}>{postDetails[0]?.data?.children[0].data.subreddit_name_prefixed}</p>
                            <p style={{fontFamily: 'Arial', margin: 0, padding: 0}}>Posted by {postDetails[0]?.data?.children[0].data.author}</p>
                        </div>
                    </div>
                    <h2 style={{fontFamily: 'Arial'}}>{postDetails[0]?.data?.children[0].data.title}</h2>
                    <ReactMarkdown children={postDetails[0]?.data?.children[0].data.selftext} />
                </div>
                <div>
                    {postDetails[1]?.data?.children.map( (comment, i) => <PostComment data={comment.data} key={i} />)}
                </div>
                </div>
            </Content>) : <PostDetailsSkeleton />
            }
            <Sider style={{backgroundColor: '#EAEAEA', position: 'fixed', height: '100%', right: '0'}}>
                <h2>Hello</h2>
            </Sider>
        </Layout>
    );
}