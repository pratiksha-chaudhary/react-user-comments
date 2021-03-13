
import { Switch, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AdminPage from "./pages/AdminPage";
import CommentsPage from "./pages/CommentsPage";
import DashboardPage from "./pages/DashboardPage";
import HomePage from "./pages/HomePage";
import MapPage from "./pages/MapPage";
import TaskPage from "./pages/TaskPage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Switch>
        <Route path={`/comments`} component={CommentsPage} />
        <Route path={`/tasks`} component={TaskPage} />
        <Route path={`/map`} component={MapPage} />
        <Route path={`/dashboard`} component={DashboardPage} />
        <Route path={`/admin`} exact component={AdminPage} />
        <Route path={`/`} exact component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
