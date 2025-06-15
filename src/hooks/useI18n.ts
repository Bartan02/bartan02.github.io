'use client';

import { useTranslations } from 'next-intl';

interface IUseI18n {
    namespace?: string;
}

export const useI18n = ({ namespace }: IUseI18n = {}) => {
    const t = useTranslations(namespace);
    return { t };
};