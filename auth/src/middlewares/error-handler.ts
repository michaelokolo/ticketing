import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { RequestValidationError } from '../errors/request-validation-error';
import { DatabaseConnectionError } from '../errors/database-connection-error';

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof RequestValidationError) {
    const formattedErrors = err.errors
      .filter((error) => error.type === 'field')
      .map((error) => {
        return { message: error.msg, field: error.path };
      });
    res.status(400).send({ errors: formattedErrors });
    return;
  }

  if (err instanceof DatabaseConnectionError) {
    res.status(500).send({
      errors: [{ message: err.reason }],
    });
    return;
  }

  res.status(400).send({
    errors: [{ message: 'Something went wrong' }],
  });
  return;
};
