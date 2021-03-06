import { push, goBack } from 'connected-react-router';
import { bindActionCreators } from 'redux';

export default {
    mapStateToProps: state => ({}),
    mapDispatchToProps: dispatch => ({
        push: bindActionCreators(push, dispatch),
        goBack: bindActionCreators(goBack, dispatch),
    }),
};

