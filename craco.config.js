// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets/'),
      '@components': path.resolve(__dirname, 'src/components/'),
      '@hooks': path.resolve(__dirname, 'src/hooks/'),
      '@models': path.resolve(__dirname, 'src/models/'),
      '@redux': path.resolve(__dirname, 'src/redux/'),
      '@styles': path.resolve(__dirname, 'src/styles/'),
      '@tests': path.resolve(__dirname, 'src/__tests__/'),
      '@types': path.resolve(__dirname, 'src/types/'),
      '@urls': path.resolve(__dirname, 'src/urls/'),
      '@utils': path.resolve(__dirname, 'src/utils/'),
      '@views': path.resolve(__dirname, 'src/views/'),
    },
  },
  jest: {
    configure: {
      moduleNameMapper: {
        '^@assets(.*)$': '<rootDir>/src/assets$1',
        '^@components(.*)$': '<rootDir>/src/components$1',
        '^@hooks(.*)$': '<rootDir>/src/hooks$1',
        '^@models(.*)$': '<rootDir>/src/models$1',
        '^@redux(/.*)$': '<rootDir>/src/redux$1',
        '^@styles(.*)$': '<rootDir>/src/styles$1',
        '^@tests(.*)$': '<rootDir>/src/__tests__$1',
        '^@types(.*)$': '<rootDir>/src/types$1',
        '^@urls(.*)$': '<rootDir>/src/urls$1',
        '^@utils(.*)$': '<rootDir>/src/utils$1',
        '^@views(.*)$': '<rootDir>/src/views$1',
      },
    },
  },
};
