import "./styles.css";

const Theory = () => {
  return (
    <>
      <div className="theory">
        <h3>Theory</h3>
        <p className="theory-content">
          <p>
            Light Dependent Resistors (LDRs), also known as photoresistors or
            photocells, are semiconductor devices whose resistance changes with
            variations in incident light intensity. The mechanism behind this
            phenomenon involves the photoconductivity of certain semiconductor
            materials used in the construction of LDRs.
          </p>
          <p>
            The sensitivity of an LDR sensor refers to its ability to detect
            small changes in light intensity and convert them into measurable
            electrical signals. Sensitivity is typically characterized by
            parameters such as the response time, detection limit, and dynamic
            range of the sensor.
          </p>
          <p>
            In this experiment, sensitivity analysis involves exposing the LDR
            sensor to controlled variations in light intensity while measuring
            the corresponding changes in resistance. By plotting a calibration
            curve of resistance against light intensity, the sensitivity of the
            sensor can be quantitatively evaluated. Factors affecting
            sensitivity include the material composition of the LDR, the surface
            area exposed to light, ambient temperature, and wavelength of
            incident light.
          </p>
          <p>
            Understanding the sensitivity characteristics of LDR sensors is
            essential for optimizing their performance in specific applications,
            such as light intensity measurement, ambient light detection, or
            light-based control systems
          </p>
        </p>
      </div>
    </>
  );
};

export default Theory;
