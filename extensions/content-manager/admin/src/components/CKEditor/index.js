import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from 'ckeditor-build-with-simple-upload-provider-strapi';
import styled from 'styled-components';

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  return (
    <Wrapper>
    <CKEditor
  editor={ClassicEditor}
  data={value}
  onChange={(event, editor) => {
    const data = editor.getData();
    onChange({ target: { name, value: data } });
  }}
  config={{
    simpleUpload: {
      uploadUrl: `${strapi.backendURL}/upload`,
    }
  }}
  />
  </Wrapper>
);
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;