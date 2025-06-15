import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../../next-intl.config";

interface IUseI18n {
    namespace?: string;
}

export const useI18n = ({ namespace }: IUseI18n = {}) => {
    const { t } = useTranslation(namespace ? namespace : i18nConfig.defaultLocale);

    return { t };
};