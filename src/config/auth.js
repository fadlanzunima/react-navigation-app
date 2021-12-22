export const SigninUser = async body => {
  try {
    const res = await fetch('https://backendexample.sanbersy.com/api/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};

export const SignupUser = async body => {
  try {
    const res = await fetch('https://backendexample.sanbersy.com/api/users', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });
    return res.json();
  } catch (error) {
    throw error;
  }
};
