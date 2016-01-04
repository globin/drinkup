export default (ComposedComponent) => {
    Object.assign(ComposedComponent.prototype, {
        handleChange(propName, value) {
            this.setState({ [propName]: value }); // eslint-disable-line react/no-set-state
        },
        valueLink(propName) {
            return {
                value: this.state[propName],
                requestChange: this.handleChange.bind(this, propName),
            };
        },
    });

    return ComposedComponent;
};
