import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { observer } from 'mobx-react';
import { appStore } from '../store/store';
import "../style/App.scss";

const ReposSearchPage: React.FC = observer(() => {
  const { owner, repo } = appStore;
  const navigate = useNavigate();

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    appStore.setOwner('');
    appStore.setRepo('');
    navigate(`/issues/${owner}/${repo}`);
  };

  return (
    <div className="repossearch-container">
      <h2>Welcome to the issues-manager</h2> 
      <div className="form-wrapper">
        <form className="repossearch-form" onSubmit={handleFormSubmit}>
          <div className="owner-container">
            <label className="repossearch-labelOne">
              Repo owner:
            </label>
            <input
              type="text"
              value={owner}
              onChange={(e) => appStore.setOwner(e.target.value)}
              required
            />
          </div>
          <div className="repo-container">
            <label className="repossearch-labelTwo">
              Repo title:
            </label>
            <input
              type="text"
              value={repo}
              onChange={(e) => appStore.setRepo(e.target.value)}
              required
            />
          </div>
          
          <button type="submit">Show Issues</button>
        </form>
      </div>
    </div>
  );
});

export default ReposSearchPage;

// class ReposSearchPage extends React.Component{
//   navigate: any;
//   constructor(props: {} | Readonly<{}>) {
//     super(props);
//     this.navigate = useNavigate();
//   }

//   handleFormSubmit = (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     appStore.setOwner('');
//     appStore.setRepo('');
//     this.navigate(`/issues/${appStore.owner}/${appStore.repo}`);
//   };

//   render() {
//     return (
//       <div className="repossearch-container">
//         <h2>Welcome to the issues-manager</h2>
//         <div className="form-wrapper">
//           <form className="repossearch-form" onSubmit={this.handleFormSubmit}>
//             <div className="owner-container">
//               <label className="repossearch-labelOne">Repo owner:</label>
//               <input
//                 type="text"
//                 value={appStore.owner}
//                 onChange={(e) => appStore.setOwner(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="repo-container">
//               <label className="repossearch-labelTwo">Repo title:</label>
//               <input
//                 type="text"
//                 value={appStore.repo}
//                 onChange={(e) => appStore.setRepo(e.target.value)}
//                 required
//               />
//             </div>

//             <button type="submit">Show Issues</button>
//           </form>
//         </div>
//       </div>
//     );
//   }
// }

// export default observer(ReposSearchPage);