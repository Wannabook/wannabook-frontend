import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import PasswordInput from '../../../common/FormComponents/PasswordInput';

import {
  Container,
  StyledChangePasswordForm,
  InputBlock,
  Label,
  ErrorMessage,
  ChangePasswordButton,
} from './styles';

const inputList = [
  {
    labelText: 'Старый пароль',
    inputAttrs: {
      placeholder: 'Старый пароль',
      name: 'old',
    },
  },
  {
    labelText: 'Новый пароль',
    inputAttrs: {
      placeholder: 'Новый пароль',
      name: 'newPassword',
    },
  },
  {
    labelText: 'Повторите новый пароль',
    inputAttrs: {
      placeholder: 'Повторите новый пароль',
      name: 'confirmed',
    },
  },
];

const ChangePasswordForm = ({ changePassword }) => {
  const handleChangePassword = e => {
    e.preventDefault();
    const error = validatePasswords();

    if (error) return;
    changePassword(passwords);
  };
  const [passwords, setPasswords] = useState({
    old: '',
    newPassword: '',
    confirmed: '',
  });
  const [inputError, setInputError] = useState({
    old: '',
    newPassword: '',
    confirmed: '',
  });

  const resetErrors = () => {
    setInputError({
      old: '',
      newPassword: '',
      confirmed: '',
    });
  };

  const validatePasswords = () => {
    const errorMessages = {
      match: 'Пароль совпадает',
      notMatch: 'Пароль не совпадает',
    };

    if (passwords.newPassword === passwords.old) {
      setInputError({
        ...inputError,
        old: errorMessages.match,
        newPassword: errorMessages.match,
      });

      return 'Пароль не совпадает';
    }
    if (passwords.newPassword !== passwords.confirmed) {
      setInputError({
        ...inputError,
        newPassword: errorMessages.notMatch,
        confirmed: errorMessages.notMatch,
      });

      return 'Пароль не совпадает';
    }

    return null;
  };

  return (
    <Grid stackable columns="1">
      <Grid.Row stretched columns="1">
        <Grid.Column>
          <Container>
            <StyledChangePasswordForm>
              {inputList.map(item => {
                const handleChange = e => {
                  resetErrors();
                  setPasswords({
                    ...passwords,
                    [item.inputAttrs.name]: e.target.value,
                  });
                };

                return (
                  <InputBlock key={item.labelText}>
                    <Label>{item.labelText}</Label>
                    <PasswordInput
                      {...item.inputAttrs}
                      value={passwords[item.inputAttrs.name]}
                      onChange={handleChange}
                      error={!!inputError[item.inputAttrs.name]}
                    />
                    {!!inputError[item.inputAttrs.name] && (
                      <ErrorMessage>
                        {inputError[item.inputAttrs.name]}
                      </ErrorMessage>
                    )}
                  </InputBlock>
                );
              })}
              <ChangePasswordButton
                size="large"
                primary
                onClick={handleChangePassword}
                loading={false}
              >
                Изменить пароль
              </ChangePasswordButton>
            </StyledChangePasswordForm>
          </Container>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

ChangePasswordForm.propTypes = {
  changePassword: PropTypes.func.isRequired,
};

export default ChangePasswordForm;
