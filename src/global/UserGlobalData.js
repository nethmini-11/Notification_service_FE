import { createGlobalState } from 'react-hooks-global-state';

const { useGlobalState } = createGlobalState({ 
    templateName: null,
    mailList: []
});

export { useGlobalState }