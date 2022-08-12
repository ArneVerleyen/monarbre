import { default as React } from 'react';
import { Route as ReactRoute, Route } from 'react-router';

const renderMergedProps = (element, layout, routeProps) => {
    return (layout) ? React.createElement(layout, routeProps, React.createElement(element, routeProps)) : React.createElement(element, routeProps);
};

const RouteWithLayout = ({element, layout, ...rest}) => {
    return (
        <Route {...rest} render= {routeProps => {
            return renderMergedProps(element, layout, routeProps);
        }} />
    );
};

export default RouteWithLayout;