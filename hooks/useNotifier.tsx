import { useSnackbar } from 'notistack';
import { useCallback } from 'react';

interface ShowNotificationOptions {
    isError: boolean;
    errorCode?: string;
    message: string;
}

export const useNotifier = () => {
    const { enqueueSnackbar } = useSnackbar();

    const showNotification = useCallback(
        ({ isError, errorCode, message }: ShowNotificationOptions) => {
            const variant = isError ? 'error' : 'success';
            const fullMessage = errorCode
                ? `Error ${errorCode}: ${message}`
                : message;

            enqueueSnackbar(fullMessage, {
                variant,
                anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'right',
                },
            });
        },
        [enqueueSnackbar]
    );

    return showNotification;
};
