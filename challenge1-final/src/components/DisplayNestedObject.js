const DisplayNestedObject = (data) => {
  return (
    <div>
      <div className="items">
        {Object.entries(data.data).map(([key, value], i) => {
          if (typeof value === 'object') {
            return (
              <div key={i}>
                <p>{`${key}:`}</p>
                <div style={{ paddingLeft: 50 }}>
                  <DisplayNestedObject data={value} />
                </div>
              </div>
            );
          } else {
            return <p key={`ms-${i}`}>{`${key}: ${value}`}</p>;
          }
        })}
      </div>
    </div>
  );
};

export default DisplayNestedObject;
