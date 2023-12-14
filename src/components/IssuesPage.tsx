import { useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useQuery, useMutation } from '@apollo/client';
import { GET_REPO_ISSUES, ADD_COMMENT } from '../queries/Queries';
import Error from './Error';

interface Params {
    owner: string;
    repo: string;
  }
  
  const IssuesPage: React.FC = () => {
    const params = useParams<{ owner: string; repo: string }>();
    const { error, data, refetch } = useQuery(GET_REPO_ISSUES, {
      variables: { owner: params.owner, name: params.repo },
    });

    const [comments, setComments] = useState<{ [key: string]: string }>({});
    // const [ commentText, setCommentText ] = useState('');
    const [ addComment ] = useMutation(ADD_COMMENT, {
      onCompleted: () => {
        refetch();
        //setCommentText('')
      },
    });

    const handleCommentSubmit = (issueId: string) => {
      addComment({
        variables: { issueId, body: comments[issueId] || '' }
      });
    };

  // if (loading) return <Loading />
  //if (error) return <p>Error: {error.message}</p>;
  if (error) return <Error errorMessage={error.message} />;
  const issues = data?.repository?.issues?.nodes || [];

  return (
    <div className="issues-container">
      <h2>Issues for: 
        <span id="first-span">Repo owner: {params.owner}</span> 
        <span id="second-span">Repo title: {params.repo}</span>
      </h2>
      <ul className="issues-listContainer">
        {issues.map((issue: any) => (
          <li key={issue.id}>
            <h3>{issue.title}</h3>
            <p>{issue.body}</p>
            <p>Общее количество комментариев: {issue.comments.totalCount}</p>
            <form
              className="comment-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleCommentSubmit(issue.id);
              }}
            >
              <textarea 
                value={comments[issue.id] || ''}
                onChange={(e) => setComments((prevComments) => ({
                  ...prevComments,
                  [issue.id]: e.target.value
                }))
              }
                placeholder="Add a comment..."
              />
              <button type="submit">Add comment</button>
            </form>
          </li>
        ))}
      </ul>
      <div style={{display: "flex", justifyContent: "center", width: "100%"}}>
        <NavLink style={{ background: "#4069da", color: "#fff", margin: "0 0.5rem 0 0", borderRadius:"5px", padding: "0.5rem", textAlign: "center"}} to="/">Back to repos search page</NavLink>
        <NavLink style={{ background: "#4069da", color: "#fff", margin: "0", borderRadius:"5px", padding: "0.5rem", textAlign: "center" }} to={`/user/${params.owner}`}>View Author's profile</NavLink>
      </div>
    </div>
  );
  };

  export default IssuesPage;