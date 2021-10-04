import * as React from 'react';
import { Box, Stepper, StepLabel, StepContent, Button, Typography, Paper, Step } from '@mui/material'
import Enter from '../atoms/VerticalStepperSteps/Enter';
import Exit from '../atoms/VerticalStepperSteps/Exit';
import { useCurrent } from '../../core/contexts/Current';
import Countdown, { zeroPad } from 'react-countdown';

const steps = [
  {
    label: 'Start Working',
    component: (activeStep) => <Enter shouldSave={activeStep === 1} />
  },
  {
    label: 'End Working',
    component: (activeStep) => <Exit shouldSave={activeStep === 2} />
  },
];

export default function VerticalStepper({ initialStep = 0 }) {
  const [activeStep, setActiveStep] = React.useState(initialStep);
  const { setCurrent } = useCurrent()

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleDone = () => {
    setCurrent(prev => ({
      ...prev,
      end: Date.now()
    }))
    handleNext()
  }

  const handleReset = () => {
    setActiveStep(0)
    setCurrent({
      id: 0,
      start: 0,
      end: 0,
      tasks: []
    })
  }

  const renderer = ({ minutes, seconds, completed }) => {
    if (completed) {
      return <Button
        variant="contained"
        onClick={handleDone}
        sx={{ mt: 1, mr: 1 }}
      >Done</Button>
    }
    return (
      <Typography variant="overline">
        You can done after {zeroPad(minutes)}:{zeroPad(seconds)}
      </Typography>
    )
  }

  return (
    <Box sx={{ width: '90%' }}>
      <Stepper activeStep={activeStep} orientation="vertical" >
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === steps.length - 1 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>

            <StepContent>
              <Box sx={{ mt: 2, mb: 2, width: '100%' }}>
                {step.component(activeStep)}
              </Box>

              <Box sx={{ mb: 1 }}>
                <div>
                  {index === steps.length - 1 ?
                    (
                      <Countdown
                        renderer={renderer}
                        date={Date.now() + 2 * 1000} // or current.start + 10*60*1000 TODO:
                      />
                    ) :
                    (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1 }}
                      >Continue</Button>
                    )
                  }
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>You&apos;re finished now!</Typography>
          <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
