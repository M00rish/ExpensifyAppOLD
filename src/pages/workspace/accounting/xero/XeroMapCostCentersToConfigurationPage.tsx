import React from 'react';
import {View} from 'react-native';
import HeaderWithBackButton from '@components/HeaderWithBackButton';
import OfflineWithFeedback from '@components/OfflineWithFeedback';
import ScreenWrapper from '@components/ScreenWrapper';
import SelectionList from '@components/SelectionList';
import RadioListItem from '@components/SelectionList/RadioListItem';
import useLocalize from '@hooks/useLocalize';
import useThemeStyles from '@hooks/useThemeStyles';
import AccessOrNotFoundWrapper from '@pages/workspace/AccessOrNotFoundWrapper';
import type {WithPolicyProps} from '@pages/workspace/withPolicy';
import withPolicyConnections from '@pages/workspace/withPolicyConnections';
import CONST from '@src/CONST';

function XeroMapCostCentersToConfigurationPage({policy}: WithPolicyProps) {
    const {translate} = useLocalize();
    const styles = useThemeStyles();
    const policyID = policy?.id ?? '';

    const optionsList = [
        {
            value: 'DEFAULT',
            text: translate(`workspace.xero.xeroContactDefault`),
            keyForList: 'DEFAULT',
        },
        {
            value: 'TAGS',
            text: 'Tags',
            keyForList: 'TAGS',
            isSelected: true,
        },
    ];

    return (
        <AccessOrNotFoundWrapper
            accessVariants={[CONST.POLICY.ACCESS_VARIANTS.ADMIN]}
            policyID={policyID}
            featureName={CONST.POLICY.MORE_FEATURES.ARE_CONNECTIONS_ENABLED}
        >
            <ScreenWrapper
                includeSafeAreaPaddingBottom={false}
                shouldEnableMaxHeight
                testID={XeroMapCostCentersToConfigurationPage.displayName}
            >
                <HeaderWithBackButton title={translate('workspace.xero.trackingCategories')} />
                <View style={[styles.pb2, styles.ph5]}>
                    <SelectionList
                        sections={[{data: optionsList}]}
                        ListItem={RadioListItem}
                        onSelectRow={() => {}}
                    />
                </View>
            </ScreenWrapper>
        </AccessOrNotFoundWrapper>
    );
}

XeroMapCostCentersToConfigurationPage.displayName = 'XeroMapCostCentersToConfigurationPage';
export default withPolicyConnections(XeroMapCostCentersToConfigurationPage);
