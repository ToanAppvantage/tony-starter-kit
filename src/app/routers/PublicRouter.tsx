import { Routes, Route } from 'react-router-dom';
import DummyErrorPage from '../pages/public/DummyErrorPage';
import ErrorPage from '../pages/public/ErrorPage';
import HomePage from '../pages/public/HomePage';
import LifePage from '../pages/public/LifePage';
import CreateLifePage from '../pages/public/CreateLifePage';
import DetailLifePage from '../pages/public/DetailLifePage';
import NotFoundPage from '../pages/public/NotFoundPage';

const PublicRouter = () => (
    <Routes>
        <Route element={<HomePage />} path="" />
        <Route element={<LifePage />} path="/life" />
        <Route element={<CreateLifePage />} path="/create-life" />
        <Route element={<DetailLifePage />} path="/detail-life/:id" />
        <Route element={<DummyErrorPage />} path="dummyError" />
        <Route element={<ErrorPage />} path="500" />
        <Route element={<NotFoundPage />} path="404" />
        <Route element={<NotFoundPage />} path="*" />
    </Routes>
);

export default PublicRouter;
